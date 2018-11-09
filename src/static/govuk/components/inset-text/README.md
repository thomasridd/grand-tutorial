# Inset text

## Introduction

Use bordered inset text to draw attention to important content on the page.

## Guidance

Find out when to use the inset text component in your service in the [GOV.UK Design System](https://design-system.service.gov.uk/components/inset-text).

## Quick start examples

### Inset text

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/inset-text/preview)

#### Markup

    <div class="govuk-inset-text">
      It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
    </div>

#### Macro

    {% from "inset-text/macro.njk" import govukInsetText %}

    {{ govukInsetText({
      "text": "It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application."
    }) }}

### Inset text with html

[Preview this example in the Frontend review app](http://govuk-frontend-review.herokuapp.com/components/inset-text/with-html/preview)

#### Markup

    <div class="govuk-inset-text">
      It can take up to 8 weeks to register a <a class="govuk-link" href="#">lasting power of attorney</a> if there are no mistakes in the application.
    </div>

#### Macro

    {% from "inset-text/macro.njk" import govukInsetText %}

    {{ govukInsetText({
      "html": "It can take up to 8 weeks to register a <a class=\"govuk-link\" href=\"#\">lasting power of attorney</a> if there are no mistakes in the application."
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

See [options table](https://design-system.service.gov.uk/components/inset-text/#options-example-default) for details.

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