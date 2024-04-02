import { NextFunction, Request, Response } from 'express';
import { findPassangersQuery, findPassangerTotalQuery, findPassangersSurvivedQuery } from '../services/PassangerService/PassangerService';

export const findPassangers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { Name, Survived, Pclass } = req.query as any
    if(!Name && !(Survived && Pclass)) throw {status: 404, message: 'Req query must valid'}

    const findPassangers = await findPassangersQuery({Name, Survived, Pclass});
    res.status(200).send({
      error: false,
      message: "success",
      data: findPassangers,
    });
  } catch (error) {
    next(error);
  }
};


export const findPassangersSurvived = async (req: Request, res: Response) => {
    try {
        const findPassangerSurvived = await findPassangersSurvivedQuery()
        res.status(200).send({
            error: false,
            message: "success",
            data: findPassangerSurvived,
        });
    } catch (error) {
        console.log(error)
    }
}

export const findTotalPassangers = async (req: Request, res: Response) => {
    try {
        const findTotalPassanger = await findPassangerTotalQuery()
        res.status(200).send({
            error: false,
            message: "success",
            data: findTotalPassanger,
        });
    } catch (error) {
        console.log(error)
    }
}