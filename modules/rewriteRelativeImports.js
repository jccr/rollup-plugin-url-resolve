import rewriteRelativeJavaScriptImports from './rewriteRelativeJavaScriptImports.js';

export default function rewriteRelativeImports(base, contentType, code) {
  switch (contentType) {
    case 'text/javascript':
    case 'application/javascript':
      return rewriteRelativeJavaScriptImports(base, code);
    default:
      return code;
  }
}
