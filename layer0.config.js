/**
 * Commenting this out fixes the issue
 */
require('dotenv').config({ debug: true });

module.exports = {
  connector: '@layer0/next',
  backends: {
    api: {
      domainOrIp: 'layer0-docs-layer0-examples-api-default.layer0.link',
      hostHeader: 'layer0-docs-layer0-examples-api-default.layer0.link',
    },
  },
}
