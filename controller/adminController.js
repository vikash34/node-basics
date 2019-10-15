const products=[];
exports.addProductForm=(req, res, next) => {
    res.render('add-product');
  };

  exports.addProductPost=(req, res, next) => {
    products.push({title:req.body.title}); 
    res.redirect('/');
  };

exports.getProducts=(req, res, next) => {
    res.render('shop',{prods:products});

  };

