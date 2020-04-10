import React from 'react'
import Head from '../../../components/Head'
import Layout from '../../../components/Layout'
import Form from '../../../components/ElearningPlatform/Form'
import ElearningPlatformContent from '../../../components/ElearningPlatform/ElearningPlatformContent'

const ElearningPlatform = () => {
    const pageName = 'eLearningPlatform'

    return (
        <Layout withFooter={true}>
            {/* <Head customFavicons title="Start Your Online Education Business — CSSSR Remote Development Team">
                <link rel="icon" href="../../../static/covid-19/favicon/favicon-32.png" sizes="32x32" />
                <link rel="icon" href="../../../static/covid-19/favicon/apple-touch-icon-57.png" sizes="57x57" />
                <link rel="icon" href="../../../static/covid-19/favicon/apple-touch-icon-76.png" sizes="76x76" />
                <link rel="icon" href="../../../static/covid-19/favicon/icon-96.png" sizes="96x96" />
                <link
                    rel="icon"
                    href="../../../static/covid-19/favicon/apple-touch-icon-120.png"
                    sizes="120x120"
                />
                <link rel="icon" href="../../../static/covid-19/favicon/icon-192.png" sizes="192x192" />
                <link rel="icon" href="../../../static/covid-19/favicon/icon-256.png" sizes="256x256" />
            </Head> */}

            <ElearningPlatformContent />
            <Form pageName={pageName} />
        </Layout>
    )
}

export default ElearningPlatform
