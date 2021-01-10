import React from "react";
import PropTypes from 'prop-types';

const Heading = ({ rank = 2, text, type = "headline" }) => {
	const Tag = rank > 6 ? "h6" : `h${rank}`;
	return <Tag className={`heading-${type}`}>{text}</Tag>;
};

Heading.propTypes = {
	rank: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
	text: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["headline", "subtitle", "title"]),
};

export default Heading;
