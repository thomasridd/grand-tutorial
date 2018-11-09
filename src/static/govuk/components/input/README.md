# Input

## Introduction

A single-line text field.

## Guidance

Find out when to use the input component in your service in the [GOV.UK Design System](https://design-system.service.gov.uk/components/text-input).

## Quick start examples

### Input

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/preview)

#### Markup

    <div class="govuk-form-group">
      <label class="govuk-label" for="input-example">
        National Insurance number
      </label>

      <input class="govuk-input" id="input-example" name="test-name" type="text">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National Insurance number"
      },
      "id": "input-example",
      "name": "test-name"
    }) }}

### Input with hint text

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-hint-text/preview)

#### Markup

    <div class="govuk-form-group">
      <label class="govuk-label" for="input-with-hint-text">
        National insurance number
      </label>

      <span id="input-with-hint-text-hint" class="govuk-hint">
        It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
      </span>

      <input class="govuk-input" id="input-with-hint-text" name="test-name-2" type="text" aria-describedby="input-with-hint-text-hint">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National insurance number"
      },
      "hint": {
        "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
      },
      "id": "input-with-hint-text",
      "name": "test-name-2"
    }) }}

### Input with error message

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-error-message/preview)

#### Markup

    <div class="govuk-form-group govuk-form-group--error">
      <label class="govuk-label" for="input-with-error-message">
        National Insurance number
      </label>

      <span id="input-with-error-message-hint" class="govuk-hint">
        It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
      </span>

      <span id="input-with-error-message-error" class="govuk-error-message">
        Error message goes here
      </span>

      <input class="govuk-input govuk-input--error" id="input-with-error-message" name="test-name-3" type="text" aria-describedby="input-with-error-message-hint input-with-error-message-error">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National Insurance number"
      },
      "hint": {
        "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
      },
      "id": "input-with-error-message",
      "name": "test-name-3",
      "errorMessage": {
        "text": "Error message goes here"
      }
    }) }}

### Input with width-2 class

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-width-2-class/preview)

#### Markup

    <div class="govuk-form-group">
      <label class="govuk-label" for="input-width-2">
        National insurance number
      </label>

      <span id="input-width-2-hint" class="govuk-hint">
        It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
      </span>

      <input class="govuk-input govuk-input--width-2" id="input-width-2" name="test-width-2" type="text" aria-describedby="input-width-2-hint">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National insurance number"
      },
      "hint": {
        "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
      },
      "id": "input-width-2",
      "name": "test-width-2",
      "classes": "govuk-input--width-2"
    }) }}

### Input with width-3 class

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-width-3-class/preview)

#### Markup

    <div class="govuk-form-group">
      <label class="govuk-label" for="input-width-3">
        National insurance number
      </label>

      <span id="input-width-3-hint" class="govuk-hint">
        It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
      </span>

      <input class="govuk-input govuk-input--width-3" id="input-width-3" name="test-width-3" type="text" aria-describedby="input-width-3-hint">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National insurance number"
      },
      "hint": {
        "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
      },
      "id": "input-width-3",
      "name": "test-width-3",
      "classes": "govuk-input--width-3"
    }) }}

### Input with width-4 class

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-width-4-class/preview)

#### Markup

    <div class="govuk-form-group">
      <label class="govuk-label" for="input-width-4">
        National insurance number
      </label>

      <span id="input-width-4-hint" class="govuk-hint">
        It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
      </span>

      <input class="govuk-input govuk-input--width-4" id="input-width-4" name="test-width-4" type="text" aria-describedby="input-width-4-hint">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National insurance number"
      },
      "hint": {
        "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
      },
      "id": "input-width-4",
      "name": "test-width-4",
      "classes": "govuk-input--width-4"
    }) }}

### Input with width-5 class

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-width-5-class/preview)

#### Markup

    <div class="govuk-form-group">
      <label class="govuk-label" for="input-width-5">
        National insurance number
      </label>

      <span id="input-width-5-hint" class="govuk-hint">
        It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
      </span>

      <input class="govuk-input govuk-input--width-5" id="input-width-5" name="test-width-5" type="text" aria-describedby="input-width-5-hint">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National insurance number"
      },
      "hint": {
        "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
      },
      "id": "input-width-5",
      "name": "test-width-5",
      "classes": "govuk-input--width-5"
    }) }}

### Input with width-10 class

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-width-10-class/preview)

#### Markup

    <div class="govuk-form-group">
      <label class="govuk-label" for="input-width-10">
        National insurance number
      </label>

      <span id="input-width-10-hint" class="govuk-hint">
        It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
      </span>

      <input class="govuk-input govuk-input--width-10" id="input-width-10" name="test-width-10" type="text" aria-describedby="input-width-10-hint">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National insurance number"
      },
      "hint": {
        "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
      },
      "id": "input-width-10",
      "name": "test-width-10",
      "classes": "govuk-input--width-10"
    }) }}

### Input with width-20 class

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-width-20-class/preview)

#### Markup

    <div class="govuk-form-group">
      <label class="govuk-label" for="input-width-20">
        National insurance number
      </label>

      <span id="input-width-20-hint" class="govuk-hint">
        It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
      </span>

      <input class="govuk-input govuk-input--width-20" id="input-width-20" name="test-width-20" type="text" aria-describedby="input-width-20-hint">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National insurance number"
      },
      "hint": {
        "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
      },
      "id": "input-width-20",
      "name": "test-width-20",
      "classes": "govuk-input--width-20"
    }) }}

### Input with width-30 class

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-width-30-class/preview)

#### Markup

    <div class="govuk-form-group">
      <label class="govuk-label" for="input-width-30">
        National insurance number
      </label>

      <span id="input-width-30-hint" class="govuk-hint">
        It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
      </span>

      <input class="govuk-input govuk-input--width-30" id="input-width-30" name="test-width-30" type="text" aria-describedby="input-width-30-hint">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National insurance number"
      },
      "hint": {
        "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
      },
      "id": "input-width-30",
      "name": "test-width-30",
      "classes": "govuk-input--width-30"
    }) }}

### Input with label as page heading

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/input/with-label-as-page-heading/preview)

#### Markup

    <div class="govuk-form-group">
      <h1 class="govuk-label-wrapper">
        <label class="govuk-label" for="input-with-page-heading">
          National Insurance number
        </label>

      </h1>

      <input class="govuk-input" id="input-with-page-heading" name="test-name" type="text">
    </div>

#### Macro

    {% from "input/macro.njk" import govukInput %}

    {{ govukInput({
      "label": {
        "text": "National Insurance number",
        "isPageHeading": true
      },
      "id": "input-with-page-heading",
      "name": "test-name"
    }) }}

## Requirements

### Build tool configuration

When compiling the Sass files you'll need to define includePaths to reference the node_modules directory. Below is a sample configuration using gulp

    .pipe(sass({
      includePaths: 'node_modules/'
    }))

### Static asset path configuration

In order to include the images used in the components, you need to configure your app to show these assets. Below is a sample configuration using Express js:

    app.use('/assets', express.static(path.join(__dirname, '/node_modules/govuk-frontend/assets')))

## Component options

Use options to customise the appearance, content and behaviour of a component when using a macro, for example, changing the text.

See [options table](https://design-system.service.gov.uk/components/text-input/#options-example-default) for details.

### Setting up Nunjucks views and paths

Below is an example setup using express configure views:

    nunjucks.configure('node_modules/govuk-frontend/components', {
      autoescape: true,
      cache: false,
      express: app
    })

## Contribution

Guidelines can be found at [on our Github repository.](https://github.com/alphagov/govuk-frontend/blob/master/CONTRIBUTING.md "link to contributing guidelines on our github repository")

## License

MIT