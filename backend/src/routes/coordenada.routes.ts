import prisma from "../db";
import { Router, Request, Response } from "express";

const router = Router();

router.post("/coordenada", async (req: Request, res: Response) => {
  const createCoordenada = await prisma.coordenada.create({
    data: req.body,
  });
  res.json(createCoordenada);
});

router.get("/coordenada", async (_req: Request, res: Response) => {
  const getCoordenada = await prisma.coordenada.findMany();
  res.json(getCoordenada);
});

router.get("/coordenada/:id", async (req: Request, res: Response) => {
  const getCoordenada = await prisma.coordenada.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(getCoordenada);
});

router.put("/coordenada/:id", async (req: Request, res: Response) => {
  const updateCoordenada = await prisma.coordenada.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });
  res.json(updateCoordenada);
});

router.delete("/coordenada/:id", async (req: Request, res: Response) => {
  const deleteCoordenada = await prisma.coordenada.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(deleteCoordenada);
});

export default router;
