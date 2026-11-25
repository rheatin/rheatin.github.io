---
title: vDSP Divides by N — The Population vs. Sample Trap in Cpk Calculations
description: Apple's vDSP computes population standard deviation (÷N), while SPC expects the sample standard deviation (÷N−1). How big the Cpk error is, and the Bessel correction to fix it.
pubDate: 2026-11-24
tags: [Swift, Accelerate, vDSP, SPC, Cpk]
---

## The trap

If you compute a standard deviation with Apple's **vDSP** (Accelerate framework) and feed it straight into a Cpk formula, your Cpk comes out **too optimistic**. The reason is a silent convention mismatch:

- **vDSP** computes the *population* standard deviation — it divides by **N**.
- **SPC practice** (and `STDEV.S` in Excel, and most statistics libraries) uses the *sample* standard deviation — it divides by **N−1** (Bessel's correction).

Neither is "wrong"; they answer different questions. But mixing them inflates your process-capability numbers.

## Why N−1 exists

The sample standard deviation measures deviations from the *sample mean* — and the sample mean is, by construction, the point that minimizes those very deviations. So deviations measured from it are systematically a little too small. Dividing by N−1 instead of N compensates for the one degree of freedom spent estimating the mean. (The extreme case makes it obvious: with N=1, the population formula says σ=0 — "no variation" — while the sample formula refuses to answer at all, which is the honest response.)

## How big is the error?

Since s = σ · √(N/(N−1)), a Cpk computed from vDSP's σ is inflated by the factor √(N/(N−1)):

| N | Cpk inflation |
|---|---|
| 10 | ≈ 5.4% |
| 30 | ≈ 1.7% |
| 100 | ≈ 0.5% |
| 1000 | ≈ 0.05% |

Small subgroups — exactly where Cpk decisions get argued about — are where it hurts most.

## The fix

Convert before you compute, or correct afterwards — they are equivalent:

```swift
import Accelerate

/// Convert a vDSP (population, ÷N) standard deviation to the
/// sample standard deviation (÷N−1) used in SPC.
func sampleSD(fromPopulationSD sigma: Double, count n: Int) -> Double {
    precondition(n > 1, "sample SD needs at least 2 points")
    return sigma * sqrt(Double(n) / Double(n - 1))
}

/// Or correct a Cpk that was computed from a population SD.
func sampleCpk(fromPopulationCpk cpk: Double, count n: Int) -> Double {
    cpk * sqrt(Double(n - 1) / Double(n))
}
```

Worked example: N=30, vDSP gives σ=0.0120 and a naive Cpk of 1.40. Corrected: s ≈ 0.0122, and Cpk ≈ **1.38**. Same data, same process — just an honest denominator.

Two warnings from experience:

1. **Don't double-correct.** If your σ came from a source that already divides by N−1 (Excel `STDEV.S`, most SPC software), applying the factor again makes Cpk pessimistic by the same amount.
2. **Know which σ your index wants.** Strictly, AIAG's *Cpk* uses a within-subgroup estimate (R̄/d₂ or S̄/c₄), while *Ppk* uses the overall sample s (N−1). The vDSP trap applies whenever you bring your own σ — make sure it's the σ the index expects, with the denominator it expects.

## TL;DR

vDSP divides by N. SPC divides by N−1. Multiply by √(N/(N−1)) to go from one to the other, and never let a framework's convention quietly grade your process better than it is.
