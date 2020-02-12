/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import classNames from 'classnames';
import ContentItem from '../ContentItem/ContentItem';
import { settings as ddsSettings } from '@carbon/ibmdotcom-utilities';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';
const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * Content with pictogram component
 *
 * @param {object} props props object {title, copy, pictogram, link}
 * @param {string} props.heading Content with pictogram component title property
 * @param {string} props.copy Content with pictogram component copy property
 * @param {string} props.className Pictogram Item className prop
 * @param {*} props.Pictogram Content with pictogram component Pictogram component
 * @returns {*} Content array with pictograms item JSX Component
 */
const PictogramItem = ({ heading, copy, Pictogram, cta, className }) => (
  <div className={classNames(className, `${prefix}--pictogram-item`)}>
    <div className={`${prefix}--pictogram-item__row`}>
      <div className={`${prefix}--pictogram-item__wrapper`}>
        <Pictogram.src
          data-autoid={`${stablePrefix}--pictogram-item__pictogram`}
          className={`${prefix}--pictogram-item__pictogram`}
          {...Pictogram}
        />
      </div>
      <div
        data-autoid={`${stablePrefix}--pictogram-item__content`}
        className={`${prefix}--pictogram-item__content`}>
        <ContentItem
          heading={heading}
          copy={copy}
          cta={{ style: 'text', ...cta }}
        />
      </div>
    </div>
  </div>
);

PictogramItem.propTypes = {
  heading: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  cta: PropTypes.object,
  Pictogram: PropTypes.shape({
    src: PropTypes.object.isRequired,
    ariaLabel: PropTypes.string,
    ariaHidden: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default PictogramItem;
