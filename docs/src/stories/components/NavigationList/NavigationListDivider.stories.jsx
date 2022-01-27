import React from 'react'
import clsx from 'clsx'
import {NavigationListTemplate} from './NavigationList.stories'

export default {
  title: 'Components/NavigationList/NavigationListDivider',
  excludeStories: ['NavigationListDividerTemplate'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook?node-id=2%3A2'
    }
  },
  argTypes: {
    variant: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-sectionDivider--filled'], // values
      control: {
        type: 'inline-radio',
        labels: ['subtle', 'filled']
      },
      table: {
        category: 'CSS'
      }
    },
    title: {
      defaultValue: '',
      type: 'string',
      name: 'title',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    description: {
      defaultValue: '',
      type: 'string',
      name: 'description',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    id: {
      defaultValue: '',
      type: 'string',
      name: 'id',
      description: 'Provide label for NavigationList <ul> aria-labelledby',
      table: {
        category: 'HTML'
      }
    }
  }
}

export const NavigationListDividerTemplate = ({title, description, variant, id}) => (
  <>
    <span
      className={clsx('ActionList-sectionDivider', variant && `${variant}`)}
      role={title ? undefined : 'separator'}
      aria-hidden={title ? undefined : true}
    >
      {title && (
        <h3 className="ActionList-sectionDivider-title" id={id}>
          {title}
        </h3>
      )}
      {description && <span className="ActionList-item-description">{description}</span>}
    </span>
  </>
)

export const Playground = NavigationListDividerTemplate.bind({})
Playground.args = {
  title: 'Section title',
  description: 'Section description'
}
Playground.decorators = [
  Story => (
    <NavigationListTemplate>
      <Story />
    </NavigationListTemplate>
  )
]
