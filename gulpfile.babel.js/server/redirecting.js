/**
 * Редирект на 404
 *
 * @param err
 * @param bs
 */
export const callbackErrorRedirecting = (err, bs) => {
  bs.addMiddleware('*', (req, res) => {
    res.writeHead(302, {
      location: '404.html'
    });
    res.end('Redirecting!');
  });
};

/**
 * Переадресация post запросов в get
 *
 * @param req
 * @param res
 * @param next
 */
export const middlewarePOSTtoGET = (req, res, next) => {
  if (/\.json|\.txt|\.html/.test(req.url) && req.method.toUpperCase() === 'POST') {
    console.log('[POST => GET] : ' + req.url);
    req.method = 'GET';
  }
  next();
};


/**
 * Переадресация на html
 *
 * Редирект с url вида «temp/index», «temp/index.pug», «temp/index.twig» на «temp/index.html»
 *
 * @param req
 * @param res
 * @param next
 */
export const middlewareRedirectToHtml = (req, res, next) => {
  const url = req.url;

  /*if (url.indexOf('.html') === -1 && url !== '/') {

    if (url.indexOf('.pug') !== -1) {
      req.url = url.slice(0, -3) + 'html';
    } else if (url.indexOf('.twig') !== -1) {
      req.url = url.slice(0, -4) + 'html';
    } else {
      req.url = url + '.html';
    }
  }*/
  next();
};