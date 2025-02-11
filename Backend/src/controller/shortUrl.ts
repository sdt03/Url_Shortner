import express from 'express';
import { urlModel } from '../model/shorturl';

export const createUrl = 
    async (req: express.Request, res: express.Response) => {
    try {
        console.log("The full url is: ", req.body.fullUrl);
        const fullUrl = req.body.fullUrl;
        const urlFound = await urlModel.find({ fullUrl });

        if (urlFound.length > 0) {
            res.status(409).json({ error: 'URL already exists', data: urlFound });
          } else {
            const shortUrl = await urlModel.create({ fullUrl });
            res.status(201).json(shortUrl);
          }
          
    } catch (error) {
        console.error('Error:', error); // Log the error
        res.status(500).send({ message: "Something went wrong" });
      }
      
};

export const getAllUrl = 
    async (req: express.Request, res: express.Response) => {
        try {
            const shortUrls = await urlModel.find();
            if(shortUrls.length < 0){
                res.status(404).send({message: "No short urls found"});
            } else {
                res.status(200).send(shortUrls);
            }
        } catch (error) {
            console.error('Error:', error); // Log the error
            res.status(500).send({ message: "Something went wrong" });
          }
          
};

export const getUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
        if(!shortUrl){
            res.status(404).send({message: "Short url not found"});
        } else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`);
        }
    } catch (error) {
        console.error('Error:', error); // Log the error
        res.status(500).send({ message: "Something went wrong" });
      }
      
}

export const deleteUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrl = await urlModel.findByIdAndDelete({ _id: req.params.id });
        if(shortUrl){
            res.status(204).send({message: "Url Deleted"});
        }
    }catch (error) {
        console.error('Error:', error); // Log the error
        res.status(500).send({ message: "Something went wrong" });
      }
      
} 