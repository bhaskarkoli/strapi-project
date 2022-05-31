module.exports = ({ env }) => ({
  upload: {
      config: {
          provider: 'aws-s3',
          providerOptions: {
              accessKeyId: env('AKIAQDWG2C6SMPRNPKUP'),
              secretAccessKey: env('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'),
              region: env('ap-south-1'),
              params: {
                  Bucket: env('strapi-s3-data'),
              },
          },
      },
  }
});
