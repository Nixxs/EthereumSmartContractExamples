const { NFTStorage, File } = require("nft.storage");
require('dotenv').config();
var fs = require('fs');

async function storeAsset(_name, _description, _image_path, _properties){
    const client = new NFTStorage({token: [process.env.NFTSTORAGE_API_KEY]});
    // const {fs} = require("fs");
    console.log(`uploading asset: ${_image_path}`);
    const metadata = await client.store({
        name: _name,
        description: _description,
        image: new File(
            [await fs.promises.readFile(_image_path)],
            `${_name}_image.png`,
            {type: "image/png"}
        ),
        properties: _properties
    });

    var url = metadata.url.replace("ipfs://", "https://ipfs.io/ipfs/");
    console.log(`content uploaded to: ${url}`);
}

async function main(){
    var mushroomProperties = {
        value: 20,
        stat: "health",
        affect: 10
    }
    var description = "A mushroom that increases health by 10";
    var name = "blue mushroom";
    var image_path = "assets/blue_mushroom.png";
    storeAsset(name, description, image_path, mushroomProperties);
}

main();