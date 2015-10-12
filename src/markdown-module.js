import marked from 'marked';
import highlightjs from 'highlight.js';

export default class MarkdownModule {
  constructor(opts) {
    this.opts = opts || {
      sanitize: false,
      smartypants: true
    };
  }

  highlight() {
    this.opts.highlight = function (code) {
      return highlightjs.highlightAuto(code).value;
    }
    return this;
  }

  execute(docs, ctx) {
    marked.setOptions(this.opts);
    for (let doc of docs) {
      doc.content = marked(doc.content);
    }
    return docs;
  }
}


