const globalNav = [
    {
        text: 'category 1',
        url: '/'
    },
    {
        text: 'category 2',
        url: '/'
    },
    {
        text: 'category 3',
        url: '/'
    },
    {
        text: 'category 4',
        url: '/'
    },
]

const siedebar = ['TAG-1', 'TAG-2', 'TAG-3', 'TAG-4', 'TAG-5',
                  'TAG-6', 'TAG-7', 'TAG-8', 'TAG-9', 'TAG-10',
                  'TAG-11', 'TAG-12', 'TAG-13', 'TAG-14', 'TAG-15', 'TAG-16', 'TAG-17', 'TAG-18']

const homeAllProductsGrid = [
    {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5Nzk4Mzc5ODQ5MjA=',
      title: 'テスト商品 3Dプリンター',
      vendor: 'Gutenberg',
      tags: [],
      productType: '3dprinter',
      path: '/テスト商品',
      slug: 'テスト商品',
      price: { value: 1000, currencyCode: 'JPY' },
      images: 'home_grid_image.jpg',
      description: 'テスト商品 これはテスト商品です。ページでの反映を見るために用意しました。 購入できませんので、ご注意下さい。',
      quantity: 4,
      collection: {
        id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NTI3ODg1NjM0NA==',
        title: '3Dプリンター',
        slug: '/3d-printer'
      },
      availableForSale: true
    },
    {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5ODIyODcyOTQ2MTY=',
      title: 'フィラメント１',
      vendor: 'Gutenberg',
      tags: [ 'pla' ],
      productType: 'filament',
      path: '/テスト-フィラメント',
      slug: 'テスト-フィラメント',
      price: { value: 0, currencyCode: 'JPY' },
      images: 'home_grid_image.jpg',
      description: 'フィラメントA',
      quantity: 11,
      collection: {
        id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NTI4MTIxNTY0MA==',
        title: 'フィラメント',
        slug: '/filament'
      },
      availableForSale: true
    },
    {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5OTc5OTc3MTU2MDg=',
      title: 'フィラメント２',
      vendor: 'gu-ec',
      tags: [ 'petg', 'pla' ],
      productType: 'filament',
      path: '/フィラメント２',
      slug: 'フィラメント２',
      price: { value: 1000, currencyCode: 'JPY' },
      images: 'home_grid_image.jpg',
      quantity: 100,
      collection: {
        id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NTI4MTIxNTY0MA==',
        title: 'フィラメント',
        slug: '/filament'
      },
      availableForSale: true
    },
    {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5OTc5OTgwNDMyODg=',
      title: 'フィラメント３',
      vendor: 'gu-ec',
      tags: [ 'abs', 'petg' ],
      productType: 'filament',
      path: '/フィラメント３',
      slug: 'フィラメント３',
      price: { value: 500, currencyCode: 'JPY' },
      images: 'home_grid_image.jpg',
      quantity: 0,
      collection: {
        id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NTI4MTIxNTY0MA==',
        title: 'フィラメント',
        slug: '/filament'
      },
      availableForSale: false
    },
    {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwMDcxMDY3MjgwODg=',
      title: 'Filament D',
      vendor: 'Gutenberg',
      tags: [ 'petg' ],
      productType: 'filament',
      path: '/filament-d',
      slug: 'filament-d',
      price: { value: 10000, currencyCode: 'JPY' },
      images: 'home_grid_image.jpg',
      quantity: 10,
      collection: {
        id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NTI4MTIxNTY0MA==',
        title: 'フィラメント',
        slug: '/filament'
      },
      availableForSale: true
    }
  ]

export { globalNav, siedebar, homeAllProductsGrid }