import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PageContainer } from 'components/layout';
import { SectionBackground, Section, Block } from 'components/general';

import { withNamespaces, Link } from 'i18n';

class SecondPage extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['second-page'],
		};
	}

	render() {
		const { t } = this.props;
		return (
			<Layout
				title="Deep Cast - HomePage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<SectionBackground
					bgColor="light"
					className="pb-5 pt-5 section-container"
				>
					<PageContainer>
						<Section>
							<Block direction="column">
								<h1>{t('h1')}</h1>
								<Link href="/test">
									<button type="button" className="btn btn-info mt-5 mb-5">
										{t('back-to-home')}
									</button>
								</Link>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}

SecondPage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('second-page')(SecondPage);
