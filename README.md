# Time Duration Calculator

Add or subtract two time durations (hours, minutes, seconds) with overflow/borrow handling and display as formatted H:MM:SS plus total seconds, minutes, and hours, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/calculators/time-duration-calculator-online

## How It Works

Each time input is converted to total seconds: `totalSec = h * 3600 + m * 60 + s`. For addition, the two totals are summed. For subtraction, the absolute difference is taken and the sign is preserved. `fmtHMS(totalSeconds)` formats the result: hours are `Math.floor(totalSec / 3600)`, minutes are `Math.floor((totalSec % 3600) / 60)`, and seconds are `totalSec % 60`, with two-digit zero-padding using `String.padStart(2, '0')`. Total minutes output is `Math.floor(totalSec / 60)` and total hours is `(totalSec / 3600).toFixed(4)` for fractional display.

## Features

- H/M/S inputs converted to total seconds for arithmetic
- Add or subtract operation toggle
- `fmtHMS`: zero-padded H:MM:SS formatting
- Total seconds, total minutes, and fractional total hours output
- Handles subtraction with sign (negative duration shown as negative total)

## Browser APIs Used

- (No external APIs — pure DOM arithmetic)

## Code Structure

| File | Description |
|------|-------------|
| `time-duration-calculator.js` | H/M/S to seconds conversion, add/subtract operations, `fmtHMS` with `padStart` zero-padding, total sec/min/hrs display |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| `#tdcH1`, `#tdcM1`, `#tdcS1` | First duration hours/minutes/seconds |
| `#tdcH2`, `#tdcM2`, `#tdcS2` | Second duration hours/minutes/seconds |
| `#tdcOp` | Operation selector (add/subtract) |
| `#tdcCalc` | Calculate button |
| `#tdcHms` | Result in H:MM:SS format |
| `#tdcTotalSec`, `#tdcTotalMin`, `#tdcTotalHrs` | Total duration in each unit |

## License

MIT
