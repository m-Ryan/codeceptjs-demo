const { I } = inject();

When('I visit {string} page => {string}', (page: string, url: string) => {
  I.amOnPage(url);
});

When('I click {string}', async (text: string) => {
  const haveText = await tryTo(() => {
    I.waitForElement(text);
  });

  if (haveText) return I.forceClick(text);

  const haveLinkText = await tryTo(() => {
    I.forceClick({ xpath: `.//a[contains(., '${text}')]` });
  });

  if (haveLinkText) return;

  const haveButtonText = await tryTo(() => {
    I.forceClick({ xpath: `.//button[contains(., '${text}')]` });
  });

  if (haveButtonText) return;

  const haveSpanText = await tryTo(() => {
    I.forceClick({ xpath: `.//span[contains(., '${text}')]` });
  });

  if (!haveSpanText) {
    throw new Error(`no fount element ${text}`);
  }
});

When('I click button with {string}', (text: string) => {
  I.forceClick(text, 'button');
});

When(
  'I fill the {string} field with {string}',
  (label: string, value: string) => {
    I.fillField(label, value);
  }
);

Then('I am in {string}', (url: string) => {
  I.seeInCurrentUrl(url);
});

Then('I see {string}', (text: string) => {
  I.see(text);
});
