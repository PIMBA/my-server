/** 一些常量 */
import { cwd } from "process";

const currentDate = `${new Date().getFullYear()}-${
  new Date().getMonth() + 1
}-${new Date().getDate()}`;

/** 项目根目录 */
export const rootPath = cwd();

/** 请求地址到响应json的映射文件地址 */
export const pathToFileMapPath = `${rootPath}/path_map/index.json`;

/** 日志文件地址 */
export const logsFilePath = `${rootPath}/logs/${currentDate}.log`;

/** respnse json base file path */
export const responseBasePath = `${rootPath}/response`;

import { writeFile, readFile, readFileSync } from "fs";

// writeFile(`${rootPath}/logs/2021-12-10.log`, "utf8", {}, (err, data) => {
//   console.log({ data });
// });

// writeFile(`${rootPath}/logs/2021-12-10.log`, "", (err) => {
//   console.log({ err });
// });

// readFile(`${rootPath}/logs/2021-12-11.log`, "utf8", (err, data) => {
//   console.log({ data });
// });
