export const uploadFileAPI = async (file: FormData) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/files/upload`, {
    method: 'POST',
    body: file,
  }).then((res) => res.json());
