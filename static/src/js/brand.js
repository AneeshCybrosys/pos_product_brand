odoo.define('pos_product_brand.brand', function(require){
    'use strict';
    var models = require('point_of_sale.models');
    var _super_product = models.PosModel.prototype;
    var _super_orderline = models.Orderline.prototype;
    models.PosModel = models.PosModel.extend({
        initialize: function(session, attributes){
            var self = this;
            models.load_fields('product.product', 'brand');
            _super_product.initialize.apply(this, arguments);
            console.log("this",this)
        }
    });
    models.Orderline = models.Orderline.extend({
        export_for_printing: function(){
            var line = _super_orderline.export_for_printing.apply(this, arguments);
            line.brand = this.get_product().brand;
            console.log("line",line)
            return line;
        }
    });
});
