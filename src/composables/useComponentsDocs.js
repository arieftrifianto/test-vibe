
export function useComponentsDocs() {
    const components = [
        {
            name: 'UiButton',
            description: 'A button component with various variants and sizes, featuring the clay-morphism style.',
            props: [
                { name: 'variant', type: 'String', default: 'primary', description: 'Visual style: primary, secondary, neutral, ghost, danger, success, warning' },
                { name: 'size', type: 'String', default: 'md', description: 'Size of the button: sm, md, lg' },
                { name: 'block', type: 'Boolean', default: 'false', description: 'Whether the button spans the full width' },
                { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables the button interactivity' }
            ],
            usage: `<UiButton variant="primary">Click Me</UiButton>`
        },
        {
            name: 'UiCard',
            description: 'A container component with a card style, useful for grouping content.',
            props: [
                { name: 'title', type: 'String', default: 'undefined', description: 'Title text for the card header' },
                { name: 'subtitle', type: 'String', default: 'undefined', description: 'Subtitle text for the card header' },
                { name: 'noPadding', type: 'Boolean', default: 'false', description: 'Removes default padding from the card body' }
            ],
            usage: `<UiCard title="Hello" subtitle="World">\n  <p>Content goes here</p>\n</UiCard>`
        },
        {
            name: 'UiInput',
            description: 'A text input field with a recessed clay style.',
            props: [
                { name: 'modelValue', type: 'String | Number', default: 'undefined', description: 'v-model binding' },
                { name: 'label', type: 'String', default: 'undefined', description: 'Label text displayed above input' },
                { name: 'type', type: 'String', default: 'text', description: 'HTML input type' },
                { name: 'placeholder', type: 'String', default: 'undefined', description: 'Placeholder text' },
                { name: 'error', type: 'String', default: 'undefined', description: 'Error message text' },
                { name: 'hint', type: 'String', default: 'undefined', description: 'Hint text displayed below input' },
            ],
            usage: `<UiInput label="Email" v-model="email" />`
        },
        {
            name: 'UiBadge',
            description: 'A small tag to display status or category.',
            props: [
                { name: 'variant', type: 'String', default: 'neutral', description: 'Color variant: primary, secondary, success, warning, error, neutral' },
                { name: 'size', type: 'String', default: 'md', description: 'Size: sm, md' }
            ],
            usage: `<UiBadge variant="success">Active</UiBadge>`
        },
        {
            name: 'UiAlert',
            description: 'An alert banner for feedback messages.',
            props: [
                { name: 'variant', type: 'String', default: 'info', description: 'Type: info, success, warning, error' },
                { name: 'title', type: 'String', default: 'undefined', description: 'Optional title' },
                { name: 'dismissible', type: 'Boolean', default: 'false', description: 'Whether alert can be closed' }
            ],
            usage: `<UiAlert variant="info">This is an info alert</UiAlert>`
        },
        {
            name: 'UiAvatar',
            description: 'Profile image or initials representation.',
            props: [
                { name: 'src', type: 'String', default: 'undefined', description: 'Image source URL' },
                { name: 'initials', type: 'String', default: 'undefined', description: 'Text to display if no image' },
                { name: 'size', type: 'String', default: 'md', description: 'Size: sm, md, lg' },
                { name: 'status', type: 'String', default: 'undefined', description: 'Status indicator: online, busy, offline' }
            ],
            usage: `<UiAvatar initials="JD" status="online" />`
        },
        {
            name: 'UiProgress',
            description: 'A progress bar component to visualize completion.',
            props: [
                { name: 'value', type: 'Number', default: '0', description: 'Progress percentage (0-100)' },
                { name: 'label', type: 'Boolean', default: 'false', description: 'Show progress text' },
                { name: 'variant', type: 'String', default: 'primary', description: 'Color variants' },
                { name: 'height', type: 'String', default: 'h-2.5', description: 'Height class' }
            ],
            usage: `<UiProgress :value="75" variant="primary" />`
        }
    ];

    const formComponents = [
        {
            name: 'UiSelect',
            description: 'A dropdown select component with clay styling.',
            props: [
                { name: 'modelValue', type: 'Any', default: 'undefined', description: 'Selected value' },
                { name: 'options', type: 'Array', default: '[]', description: 'Array of strings or objects {label, value}' },
                { name: 'label', type: 'String', default: 'undefined', description: 'Label text' },
                { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disabled state' }
            ],
            usage: `<UiSelect :options="['Option 1', 'Option 2']" v-model="selected" />`
        },
        {
            name: 'UiTextarea',
            description: 'A multi-line text input.',
            props: [
                { name: 'modelValue', type: 'String', default: 'undefined', description: 'Text content' },
                { name: 'label', type: 'String', default: 'undefined', description: 'Label text' },
                { name: 'rows', type: 'Number', default: '3', description: 'Number of rows' }
            ],
            usage: `<UiTextarea label="Message" v-model="message" />`
        },
        {
            name: 'UiCheckbox',
            description: 'A checkbox input.',
            props: [
                { name: 'modelValue', type: 'Boolean | Array', default: 'false', description: 'Checked state' },
                { name: 'label', type: 'String', default: 'undefined', description: 'Label text' }
            ],
            usage: `<UiCheckbox label="I agree" v-model="agree" />`
        },
        {
            name: 'UiRadio',
            description: 'A radio button input.',
            props: [
                { name: 'modelValue', type: 'Any', default: 'undefined', description: 'Selected value' },
                { name: 'value', type: 'Any', default: 'undefined', description: 'Value of this radio' },
                { name: 'label', type: 'String', default: 'undefined', description: 'Label text' }
            ],
            usage: `<UiRadio label="Option A" value="A" v-model="picked" />`
        },
        {
            name: 'UiSwitch',
            description: 'A toggle switch component.',
            props: [
                { name: 'modelValue', type: 'Boolean', default: 'false', description: 'Toggle state' },
                { name: 'label', type: 'String', default: 'undefined', description: 'Label text' }
            ],
            usage: `<UiSwitch label="Notifications" v-model="enabled" />`
        },
        {
            name: 'UiDatePicker',
            description: 'A date picker input using the calendar component.',
            props: [
                { name: 'modelValue', type: 'Date', default: 'undefined', description: 'Selected date' },
                { name: 'label', type: 'String', default: 'undefined', description: 'Label text' }
            ],
            usage: `<UiDatePicker label="Birth Date" v-model="date" />`
        }
    ];

    const dataComponents = [
        {
            name: 'UiAccordion',
            description: 'A vertically collapsing accordion component for organizing content into expandable sections.',
            props: [
                { name: 'items', type: 'Array', default: '[]', description: 'List of objects with title and content properties' }
            ],
            usage: `<UiAccordion :items="[\n  { title: 'Section 1', content: 'Description 1' },\n  { title: 'Section 2', content: 'Description 2' }\n]" />`
        },
        {
            name: 'UiTable',
            description: 'A responsive table component with clay styling.',
            props: [
                { name: 'headers', type: 'Array', default: '[]', description: 'Array of header strings' },
                { name: 'rows', type: 'Array', default: '[]', description: 'Array of row arrays (matching headers)' }
            ],
            usage: `<UiTable :headers="['Col A', 'Col B']" :rows="[['A1', 'B1'], ['A2', 'B2']]" />`
        },
        {
            name: 'UiBreadcrumb',
            description: 'Navigation trail for hierarchy.',
            props: [
                { name: 'items', type: 'Array', default: 'required', description: 'List of { label, href? }' }
            ],
            usage: `<UiBreadcrumb :items="[{label:'Home', href:'/'}, {label:'Current'}]" />`
        },
        {
            name: 'UiTabs',
            description: 'Switchable tabs component.',
            props: [
                { name: 'modelValue', type: 'String | Number', default: 'undefined', description: 'Current tab value' },
                { name: 'items', type: 'Array', default: 'required', description: 'List of { label, value }' }
            ],
            usage: `<UiTabs :items="tabs" v-model="active" />`
        },
        {
            name: 'UiCalendar',
            description: 'A monthly calendar view.',
            props: [
                { name: 'modelValue', type: 'Date', default: 'undefined', description: 'Selected date' }
            ],
            usage: `<UiCalendar v-model="date" />`
        },
        {
            name: 'UiPagination',
            description: 'Pagination controls for navigation.',
            props: [
                { name: 'modelValue', type: 'Number', default: 'undefined', description: 'Current page' },
                { name: 'totalPages', type: 'Number', default: 'undefined', description: 'Total number of pages' }
            ],
        },
        {
            name: 'UiModal',
            description: 'A modal dialog overlay.',
            props: [
                { name: 'isOpen', type: 'Boolean', default: 'false', description: 'Controls visibility' },
                { name: 'title', type: 'String', default: 'undefined', description: 'Modal title' }
            ],
            usage: `<UiModal :isOpen="show" title="Title" @close="show = false">\n  <p>Content</p>\n</UiModal>`
        }
    ];

    components.push(...formComponents, ...dataComponents);

    return { components };
}
