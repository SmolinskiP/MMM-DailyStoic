
# MMM-DailyStoic

<div align="center">
  <img src="https://github.com/user-attachments/assets/dfdf5ea7-afc0-475d-9e40-90491b758cb7" alt="Alt text" width="500">
</div>

**MMM-DailyStoic** is a MagicMirror² module that displays daily quotes from Stoic philosophy. It fetches quotes from [Daily Stoic](https://dailystoic.pl/quote/text_pl.json) and [Daily Stoic (EN)](https://dailystoic.pl/quote/text_en.json) and updates the display periodically.

## Features
- Displays a daily quote with optional title and description.
- Supports quotes in two languages: Polish and English.
- Customizable display options (title, quote, description).
- Automatically updates quotes at a configurable interval.

## Installation

1. Clone the repository into your `modules` folder of your MagicMirror² setup:
    ```bash
    cd ~/MagicMirror/modules
    git clone https://github.com/SmolinskiP/MMM-DailyStoic.git
    ```

2. Navigate to the new directory:
    ```bash
    cd MMM-DailyStoic
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Install the `request` library if you haven't already:
    ```bash
    npm install request
    ```

## Configuration

To use this module, add the following configuration to your `config.js` file in the MagicMirror² directory:

```javascript
{
    module: "MMM-DailyStoic",
    position: "top_center", // Choose any region
    config: {
        updateInterval: 6 * 60 * 60 * 1000,  // Update every 6 hours
        showTitle: true,                     // Show the title of the quote
        showQuote: true,                     // Show the main quote
        showDescription: true,               // Show the description or explanation
        url: "https://dailystoic.pl/quote/text_pl.json" // URL to fetch Polish quote by default
    }
}
```

### Configuration Options

| Option          | Type    | Default                    | Description                                                |
|-----------------|---------|----------------------------|------------------------------------------------------------|
| `updateInterval` | Integer | `6 * 60 * 60 * 1000` (6 hrs)| Time between quote updates (in milliseconds).               |
| `url`           | String  | `"https://dailystoic.pl/quote/text_pl.json"` | URL to fetch the quote JSON. Use Polish: `https://dailystoic.pl/quote/text_pl.json`, or English: `https://dailystoic.pl/quote/text_en.json`. |
| `showTitle`     | Boolean | `true`                      | Set to `false` to hide the title of the quote.              |
| `showQuote`     | Boolean | `true`                      | Set to `false` to hide the main quote.                      |
| `showDescription`| Boolean | `true`                      | Set to `false` to hide the description or explanation.      |

## Dependencies
- [request](https://www.npmjs.com/package/request): A simplified HTTP request client.

## Support
If you encounter any issues, feel free to submit an issue on the [GitHub page](https://github.com/yourusername/MMM-DailyStoic/issues).
