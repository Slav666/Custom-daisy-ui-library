import React, { useEffect, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

import { useGlobalTheme } from './theming';

const StoryLayout = ({ children, title, description, source }) => {
  const [tab, setTab] = useState('preview');
  const globalTheme = useGlobalTheme();

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', globalTheme);
  }, [globalTheme]);

  return (
    <Theme dataTheme={globalTheme} className="h-screen w-full bg-base-100 p-8">
      <Navbar className="border-b border-neutral p-0 text-base-content">
        <Navbar.Start>
          <span className="text-lg font-bold">react-daisyui</span>
        </Navbar.Start>
      </Navbar>

      <div className="my-4 h-full w-full">
        <h1 className="text-4xl font-bold text-base-content">{title}</h1>
        <p className="text-base-content">{description}</p>
        <div className="my-4">
          {/* Mobile view */}
          <div className="block sm:hidden">
            {children}
            <CodeMockup className="mb-8 mt-3 w-full">
              <Highlight {...defaultProps} theme={theme} code={source} language="jsx">
                {({ tokens, getLineProps, getTokenProps }) => (
                  <pre slot="html">
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </CodeMockup>
          </div>

          {/* Desktop view */}
          <div className="hidden sm:grid">
            <Tabs
              className="z-10 -mb-px"
              variant="lifted"
              value={tab}
              onChange={tab => setTab(tab === 'fullWidthClick' ? 'html' : tab)}
            >
              <Tabs.Tab value="preview" className="[--tab-bg:hsl(var(--b2))]">
                Preview
              </Tabs.Tab>
              <Tabs.Tab
                value="html"
                className={
                  tab === 'html'
                    ? '[--tab-bg:hsl(var(--n))] [--tab-border-color:hsl(var(--n))] [--tab-color:hsl(var(--nc))]'
                    : ''
                }
              >
                HTML
              </Tabs.Tab>
              <Tabs.Tab
                value="fullWidthClick"
                className="mr-6 flex-1 cursor-default [--tab-border-color:transparent]"
              />
            </Tabs>
            <div className="rounded-b-box rounded-tr-box relative overflow-x-auto">
              {tab === 'preview' ? (
                <div
                  className="preview rounded-b-box rounded-tr-box flex min-h-[6rem]
                            min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden overflow-y-hidden
                            border border-base-300 bg-base-200 bg-cover bg-top p-4"
                  style={{ backgroundSize: '5px 5px' }}
                >
                  {children}
                </div>
              ) : (
                <CodeMockup className="mb-8 w-full">
                  <Highlight {...defaultProps} theme={theme} code={source} language="jsx">
                    {({ tokens, getLineProps, getTokenProps }) => (
                      <pre slot="html">
                        {tokens.map((line, i) => (
                          <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                              <span {...getTokenProps({ token, key })} />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                </CodeMockup>
              )}
            </div>
          </div>
        </div>
      </div>
    </Theme>
  );
};

export default StoryLayout;
