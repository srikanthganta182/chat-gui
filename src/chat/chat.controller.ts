import {Response} from 'express';
import axios from 'axios';

const backendUrl = 'http://localhost:8081'; // Modify if necessary

export const getChats = async (_req: any, res: Response) => {
    try {
        const response = await axios.get(`${backendUrl}/chat`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};

export const getChat = async (req: any, res: Response) => {
    const {id} = req.params;

    try {
        const response = await axios.get(`${backendUrl}/chat/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};

export const createChat = async (req: any, res: Response) => {
    const chat = req.body;

    try {
        const response = await axios.post(`${backendUrl}/chat`, chat);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};

export const updateChat = async (req: any, res: Response) => {
    const {id} = req.params;
    const chat = req.body;

    try {
        const response = await axios.put(`${backendUrl}/chat/${id}`, chat);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};

export const deleteChat = async (req: any, res: Response) => {
    const {id} = req.params;

    try {
        await axios.delete(`${backendUrl}/chat/${id}`);
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};
