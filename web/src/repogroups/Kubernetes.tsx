import { RepogroupMetadata } from './types'
import { SearchPatternType } from '../../../shared/src/graphql/schema'
import * as React from 'react'

export const kubernetes: RepogroupMetadata = {
    title: 'Kubernetes',
    name: 'kubernetes',
    url: '/kubernetes',
    description: 'This repository group contains all the repositories for the Kubernetes community.',
    examples: [
        {
            title:
                'Use a ReplicationController configuration to ensure specified number of pod replicas are running at any one time.',
            exampleQuery: (
                <>
                    <span className="repogroup-page__keyword-text">file:</span>pod.yaml{' '}
                    <span className="repogroup-page__keyword-text">content:</span>"kind: ReplicationController"
                </>
            ),
            rawQuery: 'file:pod.yaml content:"kind: ReplicationController"',
            patternType: SearchPatternType.literal,
        },
        {
            title: 'See how Prometheus is used for monitoring in different popular projects:',
            exampleQuery: (
                <>
                    <span className="repogroup-page__keyword-text">lang:</span>yaml prom/prometheus
                </>
            ),
            rawQuery: 'lang:yaml prom/prometheus',
            patternType: SearchPatternType.literal,
        },
        {
            title: 'Search for examples of the sidecar pattern in Go:',
            exampleQuery: (
                <>
                    <span className="repogroup-page__keyword-text">lang:</span>go sidecar
                </>
            ),
            rawQuery: 'lang:go sidecar',
            patternType: SearchPatternType.literal,
        },
        {
            title: 'Browse recent diffs for code changes in the community:',
            exampleQuery: (
                <>
                    <span className="repogroup-page__keyword-text">type:</span>diff{' '}
                    <span className="repogroup-page__keyword-text">after:</span>"1 week ago"
                </>
            ),
            rawQuery: 'type:diff after:"1 week ago"',
            patternType: SearchPatternType.literal,
        },
    ],
    homepageDescription: 'Search within the Kubernetes community.',
    homepageIcon:
        'data:image/png;base64,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',
}
