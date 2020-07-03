import { RepogroupMetadata } from './types'
import { SearchPatternType } from '../../../shared/src/graphql/schema'
import * as React from 'react'
export const reactHooks: RepogroupMetadata = {
    title: 'React Hooks',
    name: 'react-hooks',
    url: '/react-hooks',
    description: 'Examples of useState for ReactHooks.',
    examples: [
        {
            title: 'useState imports regex search:',
            exampleQuery: <>import [^;]+useState[^;]+ from 'react'</>,
            rawQuery: "import [^;]+useState[^;]+ from 'react'",
            patternType: SearchPatternType.regexp,
        },
        {
            title: 'useState with objects as input parameters structural search:',
            exampleQuery: (
                <>
                    {'useState({:[string]})'} <span className="repogroup-page__keyword-text">count:</span>1000
                </>
            ),
            rawQuery: 'useState({:[string]}) count:1000',
            patternType: SearchPatternType.structural,
        },
        {
            title: 'useState with arrays as input parameters structural search:',
            exampleQuery: (
                <>
                    useState([:[string]]) <span className="repogroup-page__keyword-text">count:</span>1000
                </>
            ),
            rawQuery: 'useState([:[string]]) count:1000',
            patternType: SearchPatternType.structural,
        },
        {
            title: 'useState with any type of input parameters structural search:',
            exampleQuery: (
                <>
                    useState(:[string]) <span className="repogroup-page__keyword-text">count:</span>1000
                </>
            ),
            rawQuery: 'useState(:[string]) count:1000',
            patternType: SearchPatternType.structural,
        },
        {
            title: 'useState with any type of input parameters structural search for only typescript files:',
            exampleQuery: (
                <>
                    useState(:[string]) <span className="repogroup-page__keyword-text">count:</span>1000{' '}
                    <span className="repogroup-page__keyword-text">lang:</span>typescript
                </>
            ),
            rawQuery: 'useState(:[string]) count:1000 lang:typescript',
            patternType: SearchPatternType.structural,
        },
        {
            title: 'useState with exactly two input params for structural search should return a lot fewer results:',
            exampleQuery: (
                <>
                    useState([:[1.], :[2.]]) <span className="repogroup-page__keyword-text">count:</span>1000
                </>
            ),
            rawQuery: 'useState([:[1.], :[2.]]) count:1000',
            patternType: SearchPatternType.structural,
        },
        {
            title: 'useState with two or more params in a specific file with structural search:',
            exampleQuery: (
                <>
                    useState([:[1], :[2]]) <span className="repogroup-page__keyword-text">count:</span>1000{' '}
                    <span className="repogroup-page__keyword-text">file:</span>
                    docs/src/pages/components/transfer-list/TransferList.js
                </>
            ),
            rawQuery: 'useState([:[1], :[2]]) count:1000 file:docs/src/pages/components/transfer-list/TransferList.js',
            patternType: SearchPatternType.structural,
        },
    ],
    homepageDescription: 'Examples of useState for ReactHooks.',
    homepageIcon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
}
