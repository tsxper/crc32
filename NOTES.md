# RELEASE NOTES

## v2.1.1

### Improved

- Documentation. Added examples with UTF-8, hexadecimal output, CRC32 of the file in a browser.

## v2.1.0

### Added

- Performance measurements.
- Automated in-browser test.

### Improved

- Overall performance.

## v2.0.1

### Added

- Source code for lookup tables generation.

## v2.0.0

### Added

- Class *CRC32Streams* can be used for files and streams.
- New *CRC32* methods:
  - forString(input: string): number
  - forBuffer(input: Uint8Array): number
  - forBytes(bytes: Uint8Array, accumulator?: number): number
- More examples.

## v1.0.5

### Added

- Class *CRC32*.
- Tests.

### Fixed

- Tagging through GitHub actions.
