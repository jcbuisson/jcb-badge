
# jcb-badge

A custom-element which displays a badge containing a mark as a fraction

<img src="https://jcbuisson.github.io/assets/badge.png" width="500" />

## Properties

| Property      | Attribute     | Type     | Default | Description                                      |
|---------------|---------------|----------|---------|--------------------------------------------------|
| `denominator` | `denominator` | `String` | "10"    | The text to display on the lower part of the fraction |
| `numerator`   | `numerator`   | `String` | "0"     | The text to display on the upper part of the fraction |

## CSS Custom Properties

| Property                       | Description                                      |
|--------------------------------|--------------------------------------------------|
| `--jcb-badge-holder-color`     | Controls the color of the holder (default: #FEAC4C) |
| `--jcb-badge-text-color`       | Controls the color of the mark text (default: black) |
| `--jcb-badge-text-font-family` | Controls the font family of the mark text (default: Roboto, Helvetica, Arial, sans-serif) |
