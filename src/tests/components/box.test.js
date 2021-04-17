import '@testing-library/jest-dom';
import {shallow} from "enzyme";
import Box from '../../components/box';

describe("<Box/> component", () => {
    test("should render <Box/> component", () => {
        const wrapper = shallow(<Box />);
        expect(wrapper).toMatchSnapshot();
    });
});