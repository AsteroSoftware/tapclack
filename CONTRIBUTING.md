# Contributing to TapClack Engineering Resources

Thank you for your interest in contributing to TapClack! This engineering resource collection is maintained by [Astero Engineering](https://asteroengineering.com). This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

1. **Fork the Repository**
   - Fork the repository to your GitHub account
   - Clone your fork locally

2. **Set Up Development Environment**
   - Install Node.js (v16 or higher recommended)
   - Install dependencies using `npm install`, `yarn`, or `pnpm install`
   - Run the development server using `npm run dev`

3. **Create a Branch**
   - Create a new branch for your feature or fix
   - Use a descriptive name: `feature/description` or `fix/description`
   - Example: `feature/add-new-resource-category` or `fix/navigation-bug`

4. **Make Your Changes**
   - Follow the existing code style and conventions
   - Write clear, descriptive commit messages
   - Keep commits focused and atomic
   - Add comments for complex logic

5. **Test Your Changes**
   - Ensure the application runs without errors
   - Test your changes in both light and dark modes
   - Verify responsive design on different screen sizes
   - Check that all links and features work as expected

6. **Submit a Pull Request**
   - Push your changes to your fork
   - Create a Pull Request to the main repository
   - Provide a clear description of your changes
   - Reference any related issues

## Adding New Resources

When adding new engineering resources:

1. Add entries to the appropriate category in `lib/data.ts`
2. Ensure each resource includes:
   - Title
   - Description
   - URL

## Style Guidelines

- Use TypeScript for all new code
- Follow the existing component structure
- Use Tailwind CSS for styling
- Utilize shadcn/ui components when possible
- Follow Next.js 13 best practices

## Need Help?

If you have questions or need clarification:

1. Check existing issues and discussions
2. Create a new issue for questions
3. Be clear and specific about your question
4. Reach out to the maintainers at [Astero Engineering](https://asteroengineering.com)

## License

By contributing to TapClack, you agree that your contributions will be licensed under the same terms as the main project. TapClack is maintained by [Astero Engineering](https://asteroengineering.com).
