import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository';
import { UploadAndCreateAttachmentUseCase } from './upload-and-create-attachment';
import { FakeUploader } from 'test/storage/fake-uploader';
import { InvalidAttachmentTypeError } from './errors/invalid-attachment-type-error';

let inMemoryAttachmentsRepository: InMemoryAttachmentsRepository;
let fakeUploader: FakeUploader;

let sut: UploadAndCreateAttachmentUseCase;

describe('Carregar e criar anexo', () => {
  beforeEach(() => {
    inMemoryAttachmentsRepository = new InMemoryAttachmentsRepository();
    fakeUploader = new FakeUploader();

    sut = new UploadAndCreateAttachmentUseCase(
      inMemoryAttachmentsRepository,
      fakeUploader,
    );
  });

  it('deve ser possível carregar e criar um anexo', async () => {
    const result = await sut.execute({
      fileName: 'profile.png',
      fileType: 'image/png',
      body: Buffer.from(''),
    });

    expect(result.isRight()).toBe(true);
    expect(result.value).toEqual({
      attachment: inMemoryAttachmentsRepository.items[0],
    });
    expect(fakeUploader.uploads).toHaveLength(1);
    expect(fakeUploader.uploads[0]).toEqual(
      expect.objectContaining({
        fileName: 'profile.png',
      }),
    );
  });

  it('não deve ser possível carregar e criar um anexo com um tipo inválido', async () => {
    const result = await sut.execute({
      fileName: 'profile.mp3',
      fileType: 'audio/mpeg',
      body: Buffer.from(''),
    });

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(InvalidAttachmentTypeError);
  });
});
