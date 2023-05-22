/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { render } from '@testing-library/react';

import classNameModifierHOCFactory from './classNameModifierHOCFactory';

describe('classNameModifierHOCFactory', () => {
  it('should render correctly', () => {
    const withTestClass = classNameModifierHOCFactory('withTestClass', [
      'test-class',
    ]);
    const MyComponent = (props: any) => <div {...props}>test</div>;
    const MyTestClassComponent = withTestClass(MyComponent);

    const { asFragment } = render(<MyTestClassComponent />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with multiple classNames', () => {
    const withTestClass = classNameModifierHOCFactory('withTestClass', [
      'test-class-1',
      'test-class-2',
    ]);
    const MyComponent = (props: any) => <div {...props}>test</div>;
    const MyTestClassComponent = withTestClass(MyComponent);

    const { asFragment } = render(<MyTestClassComponent />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with additional className', () => {
    const withTestClass = classNameModifierHOCFactory('withTestClass', [
      'test-class',
    ]);
    const MyComponent = (props: any) => <div {...props}>test</div>;
    const MyTestClassComponent = withTestClass(MyComponent);

    const { asFragment } = render(
      <MyTestClassComponent className="additional-test-class" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with multiple classNames and additional className', () => {
    const withTestClass = classNameModifierHOCFactory('withTestClass', [
      'test-class-1',
      'test-class-2',
    ]);
    const MyComponent = (props: any) => <div {...props}>test</div>;
    const MyTestClassComponent = withTestClass(MyComponent);

    const { asFragment } = render(
      <MyTestClassComponent className="additional-test-class" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with no classNames', () => {
    const withTestClass = classNameModifierHOCFactory('withTestClass');
    const MyComponent = (props: any) => <div {...props}>test</div>;
    const MyTestClassComponent = withTestClass(MyComponent);

    const { asFragment } = render(<MyTestClassComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});