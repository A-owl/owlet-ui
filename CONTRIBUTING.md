# Contributing Guidelines

🙌 Thanks for your interest in contributing to Owlet UI! 🙌

## New Components, Features, and Bug Fixes

When creating new components, adding new features, or fixing bugs, please refer to the [Component Development guidelines][docs-components]. If there isn't an associated issue on the bug tracker yet, consider creating one so that you get a chance to discuss the changes you have in mind with the rest of the team.

## Documentation

Always remember to update [documentation site][docs] and the [`CHANGELOG.md`](CHANGELOG.md) in the same PR that contains functional changes. We do this in tandem to prevent our examples from going out of sync with the actual components. In this sense, treat documentation no different than how you would treat tests.

Here are our guidelines for updating the `CHANGELOG.md` file:

* Append your changes to the `master` sub-heading of [`CHANGELOG.md`](CHANGELOG.md).
* Add a list item for each significant change in the PR: bugs that were fixed, new features, new components, or changes to the public API
* In the list item, always link to any relevant Pull Requests, commit ranges, or individual commits
* Add a short summary of what has changed, making sure it's informative to consumers who might be unaware of implementation details
* Avoid documenting internal implementation changes that don't have an effect on the public interface

## Commit Message Format

Each commit message should include a **type**, a **scope** and a **subject**:

```
 <type>(<scope>): <subject>
```

ie:

```
 #271 feat(standard): add style config and refactor to match
 #270 fix(config): only override publicPath when served by webpack 
 #269 feat(eslint-config-defaults): replace eslint-config-airbnb 
 #268 feat(config): allow user to configure webpack stats output 
``` 

### Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope

The scope could be anything specifying place of the commit change. For example `webpack`,
`babel`, `redux` etc...

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

[docs]: https://vowlet.github.io/owlet-ui/
