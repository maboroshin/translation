# Translation Platform Comparison for Open Source softwares

**Software Translation Platform** or **oftware Localization Platform** is a tool to assist in the process of translating software for a large group of people. This is primarily an online tool. (**Update** : October 2022)

As a native Japanese, I have translated over a hundred applications. Many are open source.

## Statistics and Impressions
GitHub and E-mail are the major. GitHub and E-mail are always in communication. We can communicate with developers with icons. Most developers are friendly and jovial. This is one of the joys of GitHub. But On the Translation Platform, the developer basically does not know the translator. Developers should welcome translation contributors who encounter problems to come to GitHub to communicate.

The most common means is online platforms including GitHub. They provide a visualization of the participants' behavior. In the case of e-mail, it may be difficult to recognize another translator. On GitHub, you can see the update history of each code. Even if the project is not active, the e-mail is more difficult to understand. The developer may not check e-mail frequently.

The uTorrent project had a translation platform on its own site. This is not recommended because it increases password management. If I have a Github account, I can join other existing platforms right away. I don't use Sourceforge because it is difficult to use. However, in most cases, the developer's e-mail address is publicly available. I send translation files to this address.

**Means of transmitting translation files**

Below is the means by which I sent the latest translation files. In some cases, developers have switched from WebTranslateIt to Crowdin. I counted it as a Crowdin. It is not the number of softwares, but the number of representative developers. Even if he develops 3 software, it counts as 1.

| Service | Total |
|:-----------|--------:|
| **GitHub**  | **17** |
| **E-Mail** <br>(Total of following) | **12** |
| E-Mail <br>(Website) \* | 8 |
| E-Mail <br>(Sourceforge) \* | 4 |
| **Translation Platform** <br>(Total of following) | **11** |
| Transifex | 5 |
| Weblate   | 3 |
| Crowdin   | 2 |
| Translation platform<br>on the developer's<br>own site | 1 |
| **Total** | **40** |

\* I saw the notice on the site and sent an e-mail to the developer. Or, I sent an e-mail to the developers at Sourceforge.

### Wordpress Plugins

I have translated over 20 plugins. Most Wordpress plugins are translated on the Wordpress.org's translation platform. 

4 plugins, this translation was not reflected in the actual plugins. I think in some cases the old code was still on the platform. Others used translation files sent by e-mail or other means. In such cases, The plugin information page on Wordpress.org should state that it does not use Wordpress.org's translations. We should not contribute to a project that does not provide clear and understandable notices.

## Tools for translation file
Most translation files can be edited in a text editor. Editing software has been developed for some file extensions. The use of shortcuts key is useful.

| File extention | Software | Memo |
|:-----------|--------|--------|
| `ini`  | [IniTranslator](https://portableapps.com/apps/development/initranslator-portable) |
| `resx` | IniTranslator |
| `ts` | Qt-Linguist | Compile to `qm` file 
| `po` | [POEdit](https://poedit.net/) | Compile to `mo` file

## Privacy Issues

**Good case**

[Crowdin](https://crowdin.com/page/security) claims to be ISO certified and compliant with the EU General Data Protection Regulation (GDPR). And Recording of terminal movements, use the encryption, security systems.

[Transifex](https://www.transifex.com/legal/security/) claims on compliance with privacy laws, access control, encryption, and ISO certification of e-mail communications.

In 2019, I found someone's e-mail address on WebTranslateIt (payware). When I contacted WebTranslateIt, I received a friendly reply. After another day or so, I received an e-mail that resolved the problem. It said that the program had been improved so that the e-mail address would not be published. I was surprised at the good experience.

**Bad case**

In Weblate, The user agrees that his/her e-mail address to the commit will be published. It is not in the code, it is embedded in the comments of each commit on GitHub. So I using a Weblate-only e-mail address. For example, search for the following search terms : `Weblate commit "Co-authored-by"` . You will see that someone's e-mail address are publicly available. We are lucky that most pages on GitHub are not cached. But You can discover by opening each commit on GitHub.

Weblate has the following [Legal Terms](https://hosted.weblate.org/legal/):
> Your name and e-mail address is used in VCS commits, it will stay there indefinitely.

* Not explicitly stated. but this leads to the publication of the e-mail address (At 2019): https://github.com/WeblateOrg/weblate/issues/3105
* Allow personal email addresses to be ommitted in commits (Development in progress in 2021 - 2022) : https://github.com/WeblateOrg/weblate/issues/6508

## Access control
It concerns the developer stopping vandalism.

* Transifex: Generaly, The administrator approves participation.
* Crowdin [User Management](https://support.crowdin.com/enterprise/user-management/)
* Weblate [Access control](https://docs.weblate.org/en/latest/admin/access.html#access-control) : Anyone can rewrite it freely. Access control is not possible with the libre plan, which allows open source software projects to use it for free.

They also have a reviewer system. Reviewers can approve translation suggestions.

## Code of Conduct for Translation Platforms
Relates to the suspension of the use of vandalism.

[GitHub Community Guidelines](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines)
> Working in a collaborative environment means disagreements may happen. But **remember to criticize ideas, not people**. Share thoughtful, constructive criticism and be courteous to those you interact with.

[GitHub Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#c-acceptable-use)
> You agree that you will not under any circumstances violate our Acceptable Use Policies or **Community Guidelines**.

----
[Transifex Community Guidelines](https://community.transifex.com/faq#improve)
> But **remember to criticize ideas, not people**.
> Please avoid: Ad hominem attacks; Responding to a post’s tone instead of its actual content
> Don’t harass or grief anyone, impersonate people, or expose their private information.

----
[Crowdin Terms and Conditions](https://support.crowdin.com/terms/) : 7.1?
>7.1: the Client and any of the Users associated with the Account do not create, transmit, display or make otherwise available any Client Data that violates the terms of these Terms, (in short) or is harmful (in short), offensive, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, invasive of another’s privacy, hateful or otherwise unlawful;

----
[Weblate](https://weblate.org/terms/): No code of conduct can be found.

----
[WebTranslateIt](https://webtranslateit.com/tos) (Paidware)
>You may not use the site to harass other users.
