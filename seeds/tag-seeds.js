const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'classical music',
  },
  {
    tag_name: 'jazz music',
  },
  {
    tag_name: 'blacl',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'brown',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
