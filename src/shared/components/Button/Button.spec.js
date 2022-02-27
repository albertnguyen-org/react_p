import { render, screen } from '@testing-library/react';
import { CusButton } from '..';

// Widget test
test('CusButton render with content', () => {
    render(<CusButton title="test_cus_button" />);
    const getText = screen.getByText(/test_cus_button/i);
    expect(getText).toBeInTheDocument();
});