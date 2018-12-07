import marked from 'marked';

marked.setOptions({
  headerIds: false,
  xhtml: true,
  smartLists: true,
  gfm: true,
});

const fullRenderer = new marked.Renderer();

export const full = input => marked(input, { renderer: fullRenderer }).trim();

export default full;
