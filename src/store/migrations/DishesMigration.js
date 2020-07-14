import uniqid from 'uniqid' 

const DISHES = [
  {
    id: uniqid(),
    dishName: 'Roasted Butternut Pumpkin, Shiitake Mushroom and Haloumi Salad',
    dishDescription: 'A hearty mix of fresh greens, roasted vegetables and golden haloumi makes up this tasty winter salad.',
    ingredients: [
      {
        name: 'Shiitake Mushroom',
        weight: '200',
        id: uniqid()
      },
      {
        name: 'Roasted Butternut Pumpkin',
        weight: '100',
        id: uniqid()
      },
      {
        name: 'Haloumi Salad',
        weight: '350',
        id: uniqid()
      }
    ]
  },
  {
    id: uniqid(),
    dishName: 'Slow-cooked, Italian Beef Cheek Ragú with Pappardelle',
    dishDescription: 'Slow-cooked beef cheek ragù. Serve with just-cooked pappardelle and sprinkle with lashings of Parmesan, of course.',
    ingredients: [
      {
        name: 'Slow-cooked',
        weight: '200',
        id: uniqid()
      },
      {
        name: 'Italian Beef Cheek Ragú with Pappardelle',
        weight: '450',
        id: uniqid()
      }
    ]
  },
  {
    id: uniqid(),
    dishName: 'Chicken Cotoletta with Brussels Sprouts, Rocket and Hazelnut Salad',
    dishDescription: 'The super-crispy outer also happens to be gluten free.',
    ingredients: [
      {
        name: 'Chicken Cotoletta with Brussels Sprouts',
        weight: '200',
        id: uniqid()
      },
      {
        name: 'Rocket and Hazelnut Salad',
        weight: '370',
        id: uniqid()
      }
    ]
  },
  {
    id: uniqid(),
    dishName: 'Tomato soup',
    dishDescription: 'Fresh vegan soup with tomatos',
    ingredients: [
      {
        name: 'Tomatos',
        weight: '500',
        id: uniqid()
      },
      {
        name: 'Water',
        weight: '1500',
        id: uniqid()
      },
      {
        name: 'Basilic',
        weight: '25',
        id: uniqid()
      }
    ]
  },
  {
    id: uniqid(),
    dishName: 'Chicken and Chips',
    dishDescription: 'Fred chips and fred chicken',
    ingredients: [
      {
        name: 'Chicken',
        weight: '1500',
        id: uniqid()
      },
      {
        name: 'Chips',
        weight: '500',
        id: uniqid()
      }
    ]
  },
  {
    id: uniqid(),
    dishName: 'Fish and chips',
    dishDescription: 'Fred fish and fred chips',
    ingredients: [
      {
        name: 'Fish',
        weight: '1500',
        id: uniqid()
      },
      {
        name: 'Chips',
        weight: '500',
        id: uniqid()
      }
    ]
  }
]

export default function migrate (store) {
  const dishesList = store.getValue('dishesList')
  if (!dishesList || dishesList.length === 0) {
    store.setValue('dishesList', DISHES)
  }
}
