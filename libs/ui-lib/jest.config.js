module.exports = {
  name: 'ui-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
