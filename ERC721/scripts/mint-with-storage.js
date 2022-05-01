const { NFTStorage, File } = require("nft.storage");
require('dotenv').config();
var fs = require('fs');

async function mintNFT(_tokenURI){
    const address = "0xA70b91F5A1798a3054AAb55dD7e54c90DC7a363c"
    const contract = await ethers.getContractAt("TestNFT", address);

    console.log("minting new token");
    await contract.mint(_tokenURI);

    const tokenCount = Number(await contract.tokenCount());
    console.log("New token count", tokenCount);
    var tokenURIFromChain = await contract.tokenURI(tokenCount);
    console.log("New Token URI from Chain: ", tokenURIFromChain);
}

async function storeAsset(_name, _description, _image_path, _attributes){
    const client = new NFTStorage({token: [process.env.NFTSTORAGE_API_KEY]});
    console.log(`uploading asset: ${_image_path}`);
    const metadata = await client.store({
        name: _name,
        description: _description,
        image: new File(
            [await fs.promises.readFile(_image_path)],
            `${_name}_image.png`,
            {type: "image/png"}
        ),
        attributes: _attributes
    });

    var url = metadata.url.replace("ipfs://", "https://ipfs.io/ipfs/");
    console.log(`content uploaded to: ${url}`);

    return url;
}

async function main(){
    var mushroomProperties = {
        fatigueIncrease: 20,
        buff: "Increase Max Fatigue",
        duration: 24
    }
    var description = "A mushroom that increases max fatigue by 20 for 24 hours";
    var name = "green mushroom";
    var image_path = "assets/green_mushroom.png";
    var tokenURI = await storeAsset(name, description, image_path, mushroomProperties);
    await mintNFT(tokenURI);
}

main();