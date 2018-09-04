module.exports = {
  parseHtml: function(html) {
    let c = html.replace(/<p>/g, '<p style="font-size:14px;padding:.3em 0;"> ')
    c = c.replace(/<img\s+/g, '<img style="max-width:100%;height:auto;" ')
    // console.log(c)
    return c
  }
}