import React, { Component } from 'react';
import styled from 'styled-components';
import { H1, H2, H3, H4, H5, H6, A, Img, P, Small } from 'components/general';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
} from 'reactstrap';

const items = [
	{
		id: 1,
		altText: 'CEO',
		caption: 'Gabriel 1',
		title: 'Use case 1',
		image: 'https://picsum.photos/800/400/?image=10',
	},
	{
		id: 2,
		altText: 'Slide 2',
		caption: 'Slide 2',
		title: 'Use case 2',
		image: 'https://picsum.photos/800/400/?image=02',
	},
	{
		id: 3,
		altText: 'Slide 3',
		caption: 'Slide 3',
		title: 'Use case 3',
		image: 'https://picsum.photos/800/400/?image=05',
	},
];

const ContentSliderItem = styled(CarouselItem)`
	max-width: 100%;
	height: 550px;
	background: transparent;
	padding: 4rem 5rem 0rem 0rem;
`;

const ContentSliderIndicators = styled(CarouselIndicators)`
	justify-content: flex-start;
	position: relative;
	margin-left: 0rem;
	margin-top: -4rem;

	li {
		border-radius: 50%;
		height: 20px;
		width: 20px;
		background-color: grey;
		margin: 0.7rem;
		@media (max-width: 499px) {
			margin: 0.5rem;
		}

		&.active {
			background-color: dodgerblue;
		}
	}
`;

const ContentSliderCaption = styled(CarouselCaption)`
	text-align: left;
	left: 8% !important;
`;

export class ImageSlider extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map(item => {
			return (
				<ContentSliderItem
					className="custom-tag"
					tag="div"
					key={item.id}
					onExiting={this.onExiting}
					onExited={this.onExited}
				>
					<Img src={item.image} alt={item.altText} />
					<ContentSliderCaption
						className=""
						// captionText={item.jobTitle}
						captionText=""
						// captionHeader={item.customer}
						captionHeader=""
					/>
				</ContentSliderItem>
			);
		});

		return (
			<div>
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
					// interval={false}
				>
					{slides}

					<ContentSliderIndicators
						items={items}
						activeIndex={activeIndex}
						onClickHandler={this.goToIndex}
					/>
					{/* {slides} */}
					<CarouselControl
						direction="prev"
						directionText="Previous"
						onClickHandler={this.previous}
					/>
					<CarouselControl
						direction="next"
						directionText="Next"
						onClickHandler={this.next}
					/>
				</Carousel>
			</div>
		);
	}
}

ImageSlider.defaultProps = {
	// bgImg: 'https://via.placeholder.com/100',
};

export default ImageSlider;
