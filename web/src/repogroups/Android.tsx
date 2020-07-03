import { RepogroupMetadata } from './types'
import { SearchPatternType } from '../../../shared/src/graphql/schema'
import * as React from 'react'

export const android: RepogroupMetadata = {
    title: 'Android',
    name: 'android',
    url: '/android',
    description: 'Interesting search examples in popular Android repositories.',
    examples: [
        {
            title: 'Find usage examples of the OnClickListener function in Kotlin’s syntax:',
            exampleQuery: (
                <>
                    <span className="repogroup-page__keyword-text">file:</span>
                    {'.kt .setOnClickListener {:[function]}'}
                </>
            ),
            rawQuery: 'file:.kt .setOnClickListener {:[function]}',
            patternType: SearchPatternType.structural,
        },
        {
            title: 'Find intent filter examples in Android Manifest XML files:',
            exampleQuery: (
                <>
                    <span className="repogroup-page__keyword-text">lang:</span>
                    {'.xml <intent-filter> :[string] </intent-filter>'}
                </>
            ),
            rawQuery: 'lang:.xml <intent-filter> :[string] </intent-filter>',
            patternType: SearchPatternType.structural,
        },
        {
            title: 'Detect nested LinearLayouts in your XML layout files:',
            exampleQuery: (
                <>
                    <span className="repogroup-page__keyword-text">file:</span>
                    {'.xml <LinearLayout :[0] <LinearLayout :[1] </LinearLayout> :[2] </LinearLayout>'}
                </>
            ),
            rawQuery: 'file:.xml <LinearLayout :[0] <LinearLayout :[1] </LinearLayout> :[2] </LinearLayout>',
            patternType: SearchPatternType.structural,
        },
        {
            title: 'Find try-catch blocks to see how errors are caught:',
            exampleQuery: <>{'try {:[0]} catch (:[1]) {:[2]} finally {:[3]}'}</>,
            rawQuery: 'try {:[0]} catch (:[1]) {:[2]} finally {:[3]}',
            patternType: SearchPatternType.structural,
        },
        //         {
        //             title: 'Switch statements in Java',
        //             exampleQuery:
        //                 'http.Transport{:[_], MaxIdleConns: :[idleconns], :[_]} <span className="repogroup-page__keyword-text">-file:</span>vendor <span class="repogroup-page__keyword-text">lang:</span>go',
        //         },
    ],
    homepageDescription: 'Explore popular Android repositories.',
    homepageIcon: 'https://code.benco.io/icon-collection/logos/android-1.svg',
}
