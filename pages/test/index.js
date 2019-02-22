import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PageContainer } from 'components/layout';
import { SectionBackground, Section, Block } from 'components/general';

import { i18n, Link, withNamespaces } from 'i18n';

import Title from 'components/Title';
import Footer from 'components/Footer';

import { Button, ButtonGroup } from 'reactstrap';

class Testpage extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer'],
		};
	}

	constructor(props) {
		super(props);

		this.state = { cSelected: [] };

		this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
		this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
	}

	onRadioBtnClick(rSelected) {
		this.setState({ rSelected });
	}

	onCheckboxBtnClick(selected) {
		const index = this.state.cSelected.indexOf(selected);
		if (index < 0) {
			this.state.cSelected.push(selected);
		} else {
			this.state.cSelected.splice(index, 1);
		}
		this.setState({ cSelected: [...this.state.cSelected] });
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
								<Title />
								<button
									type="button"
									onClick={() =>
										i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
									}
									className="btn btn-info mt-5 mb-5"
								>
									{t('change-locale')}
								</button>
								<Link href="/second-page">
									<button type="button" className="btn btn-warning mt-5 mb-5">
										{t('to-second-page')}
									</button>
								</Link>
								<Footer />
								<div className="d-none">
									<h5>Radio Buttons</h5>
									<ButtonGroup>
										<Button
											color="secondary"
											onClick={() => this.onRadioBtnClick(1)}
											active={this.state.rSelected === 1}
										>
											One
										</Button>
										<Button
											color="secondary"
											onClick={() => this.onRadioBtnClick(2)}
											active={this.state.rSelected === 2}
										>
											Two
										</Button>
										<Button
											color="secondary"
											onClick={() => this.onRadioBtnClick(3)}
											active={this.state.rSelected === 3}
										>
											Three
										</Button>
									</ButtonGroup>
									<p>Selected: {this.state.rSelected}</p>

									<h5>Checkbox Buttons</h5>
									<ButtonGroup>
										<Button
											color="info"
											onClick={() => this.onCheckboxBtnClick(1)}
											active={this.state.cSelected.includes(1)}
										>
											One
										</Button>
										<Button
											color="info"
											onClick={() => this.onCheckboxBtnClick(2)}
											active={this.state.cSelected.includes(2)}
										>
											Two
										</Button>
										<Button
											color="info"
											onClick={() => this.onCheckboxBtnClick(3)}
											active={this.state.cSelected.includes(3)}
										>
											Three
										</Button>
									</ButtonGroup>
									<p>Selected: {JSON.stringify(this.state.cSelected)}</p>
								</div>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}

Testpage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('common')(Testpage);
