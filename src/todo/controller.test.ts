import { describe, expect, test } from "@jest/globals";
import express from "express";
import request from "supertest";
import todo from "./controller.js";

const app = express();
app.use("/todo", todo);

describe("ToDo Controller", () => {
  test("get home /", async () => {
    const res = await request(app).get("/todo");

    expect(res.statusCode).toBe(200);
  });
});
