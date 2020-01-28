const MVLoaderBase = require('mvloader/src/mvloaderbase');

class Mvltaskssemis extends MVLoaderBase{
    static exportConfig = {
        ext: {
            classes: {
                semis: {},
                controllers: {},
                handlers: {},
            },
            configs: {
                controllers: {},
                handlers: {
                    DBHandler: {
                        sequelize: {},
                        models: {
                            mvltAction: require('./models/mvltAction'),
                            mvltActionList: require('./models/mvltActionList'),
                            mvltActionListRelation: require('./models/mvltActionListRelation'),
                        }
                    }
                },
                semis: {},
            }
        },
        db: {},
    };

    constructor(...config) {
        super(...config);
    }

}

module.exports = Mvltaskssemis;
