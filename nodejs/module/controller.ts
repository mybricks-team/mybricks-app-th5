import {
  Req,
  Post,
  Get,
  Res,
  Body,
  Inject,
  Controller,
  UploadedFile,
  UseInterceptors,
  Query
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Response } from 'express'

import * as nodeJsurl from 'url';

import Service from './service'
import { TargetEnv } from './types';

@Controller('api/th5')
export default class Th5Controller {
  @Inject(Service)
  service: Service

  @Post('/preview')
  async preview(
    @Body('userId') userId: string,
    @Body('fileId') fileId: number,
    @Body('json') json: any,
    @Body('envType') envType: string,
    @Body('commitInfo') commitInfo: string,
    @Body('targetEnv') targetEnv: string,
    @Req() req: any
  ) {
    if (!isDefined(json) || !isDefined(userId) || !isDefined(fileId)) {
      return { code: 0, message: '参数 json、userId、fileId 不能为空' };
    }
    try {
      const result = await this.service.preview(req, { json, userId, fileId, envType, commitInfo, targetEnv });

      return {
        code: 1,
        data: result,
        message: '发布完成'
      }
    } catch (error) {
      return {
        code: -1,
        message: error.message || '发布失败'
      }
    }
  }

  @Post('/publish')
  async publish(
    @Body('userId') userId: string,
    @Body('fileId') fileId: number,
    @Body('json') json: any,
    @Body('envType') envType: string,
    @Body('commitInfo') commitInfo: string,
    @Body('targetEnv') targetEnv: string,

    // @Body('manateeUserInfo') manateeUserInfo: {token: string, session: string},
    @Req() req: any
  ) {
    if (!isDefined(json) || !isDefined(userId) || !isDefined(fileId)) {
      return { code: 0, message: '参数 json、userId、fileId 不能为空' };
    }
    try {
      const result = await this.service.publish(req, { json, userId, fileId, envType, commitInfo, targetEnv });

      return {
        code: 1,
        data: result,
        message: '发布完成'
      }
    } catch (error) {
      return {
        code: -1,
        message: error.message || '发布失败'
      }
    }
  }

  @Get('download')
  async download(
    @Query('url') url: string,
    @Res() response: Response
  ) {

    if (!url) {
      response.send({ code: 0, message: '参数 url 不能为空' })
      return
    }
    try {
      const zipFilePath = await this.service.downloadAssetesFromUrl(url);
      response.sendFile(zipFilePath)
    } catch (error) {
      response.send({
        code: -1,
        message: error.message || '下载失败'
      })
    }

    return
  }

  // @Post('/upload')
  // @UseInterceptors(FileInterceptor('file'))
  // async upload(
  //   @UploadedFile() file,
  //   @Req() req
  // ) {
  //   return await this.service.upload(req, { file })
  // }

  // @Post('/generateHTML')
  // async generateHTML(
  //   @Body('userId') userId: string,
  //   @Body('fileId') fileId: number,
  //   @Body('json') json: any,
  //   @Req() req: any
  // ) {
  // 	if (!isDefined(json) || !isDefined(fileId)) {
  // 		return { code: 0, message: '参数 json、fileId 不能为空' };
  // 	}

  // 	const res = await this.service.generateHTML(req, { json, fileId });

  // 	return res.code !== 1 ? { code: 0, message: res.error } : { code: 1, data: { bundle: res.data, ext_name: 'html' } };
  // }
}

export function isDefined(v: any) {
  return v !== undefined
}
