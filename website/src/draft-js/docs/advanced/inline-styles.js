/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
Within your editor, you may wish to provide a wide variety of inline style
behavior that goes well beyond the bold/italic/underline basics. For instance,
you may want to support variety with color, font families, font sizes, and more.
Further, your desired styles may overlap or be mutually exclusive.

The [Rich Editor](http://github.com/facebook/draft-js/examples/rich) and
[Colorful Editor](http://github.com/facebook/draft-js/examples/color)
examples demonstrate complex inline style behavior in action.

### Model

Within the Draft model, inline styles are represented at the character level,
using an immutable \`OrderedSet\` to define the list of styles to be applied to
each character. These styles are identified by string. (See [CharacterMetadata](/draft-js/docs/api/character-metadata.html) for details.)

For example, consider the text "Hello **world**". The first six characters of
the string are represented by the empty set, \`OrderedSet()\`. The final five
characters are represented by \`OrderedSet.of('BOLD')\`. For convenience, we can
think of these \`OrderedSet\` objects as arrays, though in reality we aggressively
reuse identical immutable objects.

In essence, our styles are:

\`\`\`
[
  [], // H
  [], // e
  ...
  ['BOLD'], // w
  ['BOLD'], // o
  // etc.
]
\`\`\`

### Overlapping Styles

Now let's say that we wish to make the middle range of characters italic as well:
"He_llo **wo**_**rld**". This operation can be performed via the
[Modifier](/draft-js/docs/api/modifier.html) API.

The end result will accommodate the overlap by including \`'ITALIC'\` in the
relevant \`OrderedSet\` objects as well.

\`\`\`
[
  [], // H
  [], // e
  ['ITALIC'], // l
  ...
  ['BOLD', 'ITALIC'], // w
  ['BOLD', 'ITALIC'], // o
  ['BOLD'], // r
  // etc.
]
\`\`\`

When determining how to render inline-styled text, Draft will identify
contiguous ranges of identically styled characters and render those characters
together in styled \`span\` nodes.

### Mapping a style string to CSS

By default, \`DraftEditor\` provides support for a basic list of inline styles:
\`'BOLD'\`, \`'ITALIC'\`, \`'UNDERLINE'\`, and \`'CODE'\`. These are mapped to simple CSS
style objects, which are used to apply styles to the relevant ranges.

For your editor, you may define custom style strings to include with these
defaults, or you may override the default style objects for the basic styles.

Within your \`DraftEditor\` use case, you may provide the \`customStyleMap\` prop
to define your style objects. (See
[Colorful Editor](http://github.com/facebook/draft-js/examples/color)
for a live example.)

For example, you may want to add a \`'STRIKETHROUGH'\` style. To do so, define a
custom style map:

\`\`\`
const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through',
  },
};

class MyEditor extends React.Component {
  // ...
  render() {
    return (
      <DraftEditor
        customStyleMap={styleMap}
        editorState={this.state.editorState}
        ...
      />
    );
  }
}
\`\`\`

When rendered, the \`textDecoration: line-through\` style will be applied to all
character ranges with the \`STRIKETHROUGH\` style.
`
var Post = React.createClass({
  statics: {
    content: content
  },
  render: function() {
    return <Layout metadata={{"id":"advanced-topics-inline-styles","title":"Complex Inline Styles","layout":"docs","category":"Advanced Topics","next":"advanced-topics-nested-lists","permalink":"docs/advanced/inline-styles.html"}}>{content}</Layout>;
  }
});
module.exports = Post;
