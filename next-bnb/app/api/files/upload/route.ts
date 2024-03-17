import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import { writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};
export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const imageFile = formData.get('file') as unknown as File | null;
    if (!imageFile) {
      return NextResponse.json({ error: 'No files receiced' }, { status: 400 });
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const filename = imageFile.name.replaceAll(' ', '_');

    //* 파일 이름
    const origianlFileName = filename.split('.').shift();
    //* 확장자
    const fileExtension = filename.split('.').pop();

    const _path = `public/assets/upload/${origianlFileName}__${uuidv4()}.${fileExtension}`;
    await writeFile(path.join(process.cwd(), _path), buffer);

    return NextResponse.json({ path: _path, status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ Message: 'Failed' }, { status: 500 });
  }
};
